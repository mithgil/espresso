"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[398],{3150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),s=n(814),o=["components"],r={title:"High Performance Computing",keywords:["HPC","High Performance Computing","Compiling Quantum Espresso","Installing Quantum Espresso","Quantum Espresso Installation","Intel MKL","Parallel Computing","PBS job","HPC job"]},p=void 0,u={unversionedId:"setup/hpc",id:"setup/hpc",title:"High Performance Computing",description:"In order to perform computationally heavy calculations, we would require access",source:"@site/docs/setup/hpc.mdx",sourceDirName:"setup",slug:"/setup/hpc",permalink:"/espresso/setup/hpc",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/setup/hpc.mdx",tags:[],version:"current",frontMatter:{title:"High Performance Computing",keywords:["HPC","High Performance Computing","Compiling Quantum Espresso","Installing Quantum Espresso","Quantum Espresso Installation","Intel MKL","Parallel Computing","PBS job","HPC job"]},sidebar:"docs",previous:{title:"Installation",permalink:"/espresso/setup/install"},next:{title:"Jupyter notebooks",permalink:"/espresso/setup/jupyter"}},m={},c=[{value:"Useful UNIX commands",id:"useful-unix-commands",level:2},{value:"Running jobs at NUS HPC",id:"running-jobs-at-nus-hpc",level:2},{value:"Abort and restart a calculation",id:"abort-and-restart-a-calculation",level:2},{value:"Compiling Quantum Espresso using Intel\xae Math Kernel Library (MKL)",id:"compiling-quantum-espresso-using-intel-math-kernel-library-mkl",level:2},{value:"Installing Intel oneAPI libraries",id:"installing-intel-oneapi-libraries",level:2},{value:"Intel oneAPI Base Toolkit:",id:"intel-oneapi-base-toolkit",level:4},{value:"HPC Toolkit",id:"hpc-toolkit",level:4},{value:"Intel MKL library",id:"intel-mkl-library",level:4},{value:"Compiling Quantum Espresso with CMake",id:"compiling-quantum-espresso-with-cmake",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to perform computationally heavy calculations, we would require access\nto high performance computing facilities."),(0,i.kt)("h2",{id:"useful-unix-commands"},"Useful UNIX commands"),(0,i.kt)("p",null,"Connect to a login node via ssh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh {username}@atlas9.nus.edu.sg\n")),(0,i.kt)("p",null,"Secure copy files between local and remote machines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scp {username}@10.10.0.2:/remote/file.txt /local/directory\nscp local/file.txt {username}@10.10.0.2:/remote/directory\n")),(0,i.kt)("p",null,"Check disk usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs .\ndu -hs /path/\n")),(0,i.kt)("p",null,"Rsync to synchronize two folders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -azhv --delete /source/my_project/ /destination/my_project\n")),(0,i.kt)("h2",{id:"running-jobs-at-nus-hpc"},"Running jobs at NUS HPC"),(0,i.kt)("p",null,"Check your storage quota:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hpc s\n")),(0,i.kt)("p",null,"PBS commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hpc pbs summary\n")),(0,i.kt)("p",null,"Example scrips for job submissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hpc pbs script parallel20\nhpc pbs vasp\n")),(0,i.kt)("p",null,"List available modules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"module avail\n")),(0,i.kt)("p",null,"Load a module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"module load {module-name}\n")),(0,i.kt)("p",null,"Purge loaded modules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"module purge\n")),(0,i.kt)("p",null,"Quantum Espresso is already installed in NUS HPC clusters. Here is a sample job\nscript for ",(0,i.kt)("a",{parentName:"p",href:"https://nusit.nus.edu.sg/hpc/"},"NUS HPC")," clusters:"),(0,i.kt)(s.Z,{language:"bash",title:"src/pbs_job.sh",showLineNumbers:!0,mdxType:"CodeBlock"},"#!/bin/bash\n#PBS -q parallel24\n#PBS -l select=2:ncpus=24:mpiprocs=24:mem=96GB\n#PBS -j eo\n#PBS -N qe-project-xx\nsource /etc/profile.d/rec_modules.sh\nmodule load espresso6.5-intel_18\n## module load espresso6.5-Centos6_Intel\ncd $PBS_O_WORKDIR;\nnp=$( cat  ${PBS_NODEFILE} |wc -l );\nmpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out\n"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notice that the lines beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"#PBS")," are actually PBS commands, not\ncomments. For comments, I am using ",(0,i.kt)("inlineCode",{parentName:"p"},"##"),".")),(0,i.kt)("p",null,"Query about a queue system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -q\n")),(0,i.kt)("p",null,"Check status of a particular queue system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -Qx parallel24\n")),(0,i.kt)("p",null,"Submitting a job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qsub pbs_job.sh\n")),(0,i.kt)("p",null,"Check running jobs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qstat\n")),(0,i.kt)("p",null,"Details about a job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -f {job-id}\n")),(0,i.kt)("p",null,"Stopping a job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qdel {job-id}\n")),(0,i.kt)("h2",{id:"abort-and-restart-a-calculation"},"Abort and restart a calculation"),(0,i.kt)("p",null,"If you need to modify certain parameter while the program is running, e.g., you\nwant to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"mixing_beta")," value because SCF accuracy is oscillation\nwithout any sign of convergence. Create an empty file named ",(0,i.kt)("inlineCode",{parentName:"p"},"{prefix}.EXIT")," in\nthe directory where you have the input file or in the ",(0,i.kt)("inlineCode",{parentName:"p"},"outdir")," as set in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"&CONTROL")," card of input file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"touch {prefix}.EXIT\n")),(0,i.kt)("p",null,"That will stop the program on next iteration, and save the state. In order to\nrestart, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"restart_mode")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"&CONTROL")," card to ",(0,i.kt)("inlineCode",{parentName:"p"},"'restart'")," and re-run\nafter necessary changes. You must re-submit the job with same number of\nprocessors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&CONTROL\n  ...\n  restart_mode = 'restart'\n  ...\n/\n")),(0,i.kt)("h2",{id:"compiling-quantum-espresso-using-intel-math-kernel-library-mkl"},"Compiling Quantum Espresso using Intel","\xae"," Math Kernel Library (MKL)"),(0,i.kt)("p",null,"If you need a newer or specific version of Quantum Espresso that is not\ninstalled in the NUS clusters or you have modified the source codes yourself,\nhere are the steps that I followed to successfully compile."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Quantum Espresso project is primarily hosted on GitLab, and its mirror is\nmaintained at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/QEF/q-e"},"GitHub"),". You may check their\nrepository at ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/q-e"},"GitLab")," for more up to date\ninformation. The releases via GitLab can be found under:\n",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/q-e/-/releases"},"https://gitlab.com/QEF/q-e/-/releases"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/q-e/-/releases"},"Download")," and decompress the source\nfiles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://gitlab.com/QEF/q-e/-/archive/qe-7.1/q-e-qe-7.1.tar.gz\ntar zxvf q-e-qe-7.1.tar.gz\n")),(0,i.kt)("p",null,"Load the necessary modules (applicable for NUS clusters, last checked in Jun\n2022):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2018\nmodule load fftw/3.3.7\n")),(0,i.kt)("p",null,"Go to QE directory and run ",(0,i.kt)("inlineCode",{parentName:"p"},"configure"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd q-e-qe-7.1\n./configure\n")),(0,i.kt)("p",null,"You will see output something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"...\nBLAS_LIBS=  -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\nLAPACK_LIBS=\nFFT_LIBS=\n...\n")),(0,i.kt)("p",null,"For me the ",(0,i.kt)("inlineCode",{parentName:"p"},"LAPACK_LIBS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FFT_LIBS")," libs were not automatically detected. We\nneed to specify them manually. First get the link libraries line specific to\nyour version of MKL and other configurations from the ",(0,i.kt)("a",{parentName:"p",href:"https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/onemkl/link-line-advisor.html"},"Intel link advisor"),".\nFor my case, the link line was:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcSet:n(4945).Z}),(0,i.kt)("img",{src:n(7108).Z,alt:"intel-link-line-adviser",width:"600px"})),(0,i.kt)("p",null,"We need to insert the link for ",(0,i.kt)("inlineCode",{parentName:"p"},"BLAS_LIBS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LAPACK_LIBS"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"SCALAPACK_LIBS"),".\nWe also need to find out where is the FFTW lib located. In NUS HPC, we can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"module avail")," command to see where a particular module is located, usually\nunder ",(0,i.kt)("inlineCode",{parentName:"p"},"/app1/modules/"),". Open ",(0,i.kt)("inlineCode",{parentName:"p"},"make.inc")," and make following changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="make.inc"',title:'"make.inc"'},"# ...\nCFLAGS         = -O2 $(DFLAGS) $(IFLAGS)\nCFLAGS         = -O3 $(DFLAGS) $(IFLAGS)\nF90FLAGS       = $(FFLAGS) -nomodule -fpp $(FDFLAGS) $(CUDA_F90FLAGS) $(IFLAGS) $(MODFLAGS)\n\n# compiler flags with and without optimization for fortran-77\n# the latter is NEEDED to properly compile dlamch.f, used by lapack\n- FFLAGS         = -O2 -assume byterecl -g -traceback\n+ FFLAGS         = -O3 -assume byterecl -g -traceback\nFFLAGS_NOOPT   = -O0 -assume byterecl -g -traceback\n# ...\n# If you have nothing better, use the local copy\n# BLAS_LIBS = $(TOPDIR)/LAPACK/libblas.a\n- BLAS_LIBS      =   -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\n+ BLAS_LIBS      = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n# If you have nothing better, use the local copy\n# LAPACK_LIBS_SWITCH = internal\n# LAPACK_LIBS = $(TOPDIR)/LAPACK/liblapack.a\n- LAPACK_LIBS    =\n+ LAPACK_LIBS    = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\nLAPACK_LIBS_SWITCH = external\n\n- SCALAPACK_LIBS =\n+ SCALAPACK_LIBS = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n\n# nothing needed here if the the internal copy of FFTW is compiled\n# (needs -D__FFTW in DFLAGS)\n\n- FFT_LIBS       =\n+ FFT_LIBS       = -L/app1/centos6.3/gnu/fftw/3.3.7/lib/ -lmpi\n# ...\n")),(0,i.kt)("p",null,"Now we are ready to compile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make -j8 all\n")),(0,i.kt)("p",null,"I am parallelizing with 8 processors to speed things up. You may add the\n",(0,i.kt)("inlineCode",{parentName:"p"},"q-e-qe-7.1/bin")," path to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=\"/home/svu/{username}/q-e-qe-7.1/bin:$PATH\"' >> ~/.bashrc\n")),(0,i.kt)("p",null,"And don't forget to load dependencies before calling QE executables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2018\nmodule load fftw/3.3.7\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are submitting job via PBS queue, you need to provide full path of the QE\nexecutables, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/svu/{username}/q-e-qe-7.1/bin/pw.x"),". PBS system won't\nread your bash settings, neither the relative paths of your login node would\napply.")),(0,i.kt)("h2",{id:"installing-intel-oneapi-libraries"},"Installing Intel oneAPI libraries"),(0,i.kt)("p",null,"If you need to install Intel oneAPI libraries yourself, following instructions\nmight be useful. Please refer to Intel ",(0,i.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html"},"website"),"\nfor up to date information."),(0,i.kt)("h4",{id:"intel-oneapi-base-toolkit"},"Intel oneAPI Base Toolkit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19079/l_BaseKit_p_2023.0.0.25537_offline.sh\n\n# launch the interactive cli installation\nsudo sh ./l_BaseKit_p_2023.0.0.25537_offline.sh -a --cli\n\n# list components included in oneAPI Base Toolkit\nsudo sh ./l_BaseKit_p_2023.0.0.25537_offline.sh -a --list-components\n\n# install a subset of components with silent/unattended option\nsudo sh ./l_BaseKit_p_2023.0.0.25537_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you install oneAPI without ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," privilege, it will be installed under the\nuser directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/{username}/intel/oneapi/"),". After installation is\ncompleted, the setup script will print the installation location.")),(0,i.kt)("h4",{id:"hpc-toolkit"},"HPC Toolkit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19084/l_HPCKit_p_2023.0.0.25400_offline.sh\nsudo sh ./l_HPCKit_p_2023.0.0.25400_offline.sh -a --silent --eula accept\n")),(0,i.kt)("h4",{id:"intel-mkl-library"},"Intel MKL library"),(0,i.kt)("p",null,"Installing individual components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19138/l_onemkl_p_2023.0.0.25398_offline.sh\nsudo sh ./l_onemkl_p_2023.0.0.25398_offline.sh -a --silent --eula accept\n")),(0,i.kt)("p",null,"After installation, do not forget to ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," the environment variables before\nusing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/intel/oneapi/setvars.sh\n")),(0,i.kt)("p",null,"Compile quantum espresso:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://gitlab.com/QEF/q-e/-/archive/qe-7.1/q-e-qe-7.1.tar.gz\ntar zxvf q-e-qe-7.1.tar.gz\nrm q-e-qe-7.1.tar.gz\ncd q-e-qe-7.1\n./configure F90=mpiifort MPIF90=mpiifort CC=mpicc CXX=icc F77=mpiifort LAPACK_LIBS="${MKLROOT}/lib/intel64/libmkl_blas95_lp64.a ${MKLROOT}/lib/intel64/libmkl_lapack95_lp64.a ${MKLROOT}/lib/intel64/libmkl_scalapack_lp64.a -Wl,--start-group ${MKLROOT}/lib/intel64/libmkl_intel_lp64.a ${MKLROOT}/lib/intel64/libmkl_sequential.a ${MKLROOT}/lib/intel64/libmkl_core.a ${MKLROOT}/lib/intel64/libmkl_blacs_intelmpi_lp64.a -Wl,--end-group -lpthread -lm -ldl" BLAS_LIBS="${MKLROOT}/lib/intel64/libmkl_blas95_lp64.a ${MKLROOT}/lib/intel64/libmkl_lapack95_lp64.a ${MKLROOT}/lib/intel64/libmkl_scalapack_lp64.a -Wl,--start-group ${MKLROOT}/lib/intel64/libmkl_intel_lp64.a ${MKLROOT}/lib/intel64/libmkl_sequential.a ${MKLROOT}/lib/intel64/libmkl_core.a ${MKLROOT}/lib/intel64/libmkl_blacs_intelmpi_lp64.a -Wl,--end-group -lpthread -lm -ldl" SCALAPACK_LIBS="${MKLROOT}/lib/intel64/libmkl_blas95_lp64.a ${MKLROOT}/lib/intel64/libmkl_lapack95_lp64.a ${MKLROOT}/lib/intel64/libmkl_scalapack_lp64.a -Wl,--start-group ${MKLROOT}/lib/intel64/libmkl_intel_lp64.a ${MKLROOT}/lib/intel64/libmkl_sequential.a ${MKLROOT}/lib/intel64/libmkl_core.a ${MKLROOT}/lib/intel64/libmkl_blacs_intelmpi_lp64.a -Wl,--end-group -lpthread -lm -ldl"\nmake -j4 all\n')),(0,i.kt)("h2",{id:"compiling-quantum-espresso-with-cmake"},"Compiling Quantum Espresso with CMake"),(0,i.kt)("p",null,"Please check out the ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/q-e/-/wikis/Developers/CMake-build-system"},"official documentation")," for more\ndetails. It requires ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," version ",(0,i.kt)("inlineCode",{parentName:"p"},"3.14")," or later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt install autoconf cmake make\n")),(0,i.kt)("p",null,"I used following steps to successfully compile Quantum Espresso using 2023\nversions of Intel libraries in Ubuntu 22.04 system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd q-e-qe-7.1\nmkdir build && cd build\ncmake -DCMAKE_C_COMPILER=mpiicc -DCMAKE_Fortran_COMPILER=mpiifort -DQE_ENABLE_SCALAPACK=ON ..\nmake -j4\nmv bin ..\ncd ..\nrm -rf build\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/"},"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.nscc.sg/pbspro-quickstartguide/"},"https://help.nscc.sg/pbspro-quickstartguide/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=doudMLEaq3w"},"https://www.youtube.com/watch?v=doudMLEaq3w"))))}k.isMDXComponent=!0},7108:function(e,t,n){t.Z=n.p+"assets/images/intel-link-line-adviser-30a0f6af6980b2624093d9941f4f2097.png"},4945:function(e,t,n){t.Z=n.p+"assets/images/intel-link-line-adviser-c3f2cc310ec8d4c9ea5d90e49a5e32b9.webp"}}]);